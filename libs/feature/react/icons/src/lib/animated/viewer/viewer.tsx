'use client';
import { CopyCodeToClipboard } from '@the/util/react/copy-to-clipboard'
import ReactAnimatedIcon from '../animated';
import { AnimatedIconCategory } from '../categories';

type ReactAnimatedIconViewerProps = {
  categoryName: string;
  direction?: 'row' | 'col';
  wrap?: 'wrap' | 'nowrap';
  showUsage?: boolean
};

export function ReactAnimatedIconViewer({
  categoryName,
  direction = 'col',
  wrap = 'wrap',
  showUsage = true
}: ReactAnimatedIconViewerProps) {
  const category = AnimatedIconCategory(categoryName)
  const icons = category && category.category().icons;
  return (

    <div className={`flex flex-${wrap} justify-center flex-shrink-0 flex-row -my-4 sm:-my-8 sm:-mx-3`}>
      {
        icons && icons.map(
          (icon, index) => (
            icon?.names?.constantName && (
              <div key={index} className={`flex w-full ${wrap === 'nowrap' ? 'sm:w-auto' : ' sm:w-full'} md:w-1/2 lg:w-1/3 py-4 sm:py-8 sm:px-3 justify-center`}>

                <div className={`flex flex-${direction} items-center`}>
                  <div className="text-white h-32 w-32">
                    <ReactAnimatedIcon
                      iconName={
                        icon.names.constantName
                      }
                      categoryName={category.names.fileName}
                    />
                  </div>

                  {showUsage && (
                    <div className="prose prose-sm mx-auto prose-primary max-w-full overflow-hidden">
                      <CopyCodeToClipboard>
                        <h5 className="h5 pb-1 font-semibold border-gray-700 block border-b border-solid mb-2">{icon?.names.name}</h5>
                        <code className="block">
                          &lt;ReactAnimatedIcon icon=
                        </code>
                        <code className="block pl-2 overflow-ellipsis overflow-hidden">
                          "{category.names?.className}.{icon?.names.constantName}"
                        </code>
                        <code className="block">
                          /&gt;
                        </code>
                      </CopyCodeToClipboard>

                    </div>
                  )
                  }
                </div>
              </div>
            )

          )
        )
      }
    </div>
  );
}
export default ReactAnimatedIconViewer;

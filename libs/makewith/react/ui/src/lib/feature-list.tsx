'use client';
export function FeatureList() {
  return (
    <div className="feature-list">
      <div className="feature-item">
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <div className="feature-item-content">
          <h3 className="feature-label">Tasks</h3>
          <p className="feature-description">View and schedule automated tasks to efficiently meet project demands.</p>
        </div>
      </div>
      <div className="feature-item">
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <div className="feature-item-content">
          <h3 className="feature-label">Projects</h3>
          <p className="feature-description">View job sites at a glance or comprehensively, set up automatic task triggers to take action.</p>
        </div>

      </div>
      <div className="feature-item">
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <div className="feature-item-content">
          <h3 className="feature-label">Inventories</h3>
          <p className="feature-description">View inventories at a glance or comprehensively, set up automatic task triggers to take action.</p>
          <ul className="sub-feature-list">
            <li>
              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <h5 className="sub-feature-label">Tool &amp; Rental</h5>
            </li>
            <li>
              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <h5 className="sub-feature-label">Consumables</h5>
            </li>
          </ul>
        </div>


      </div>
      <div className="feature-item">
        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
        </svg>
        <div className="feature-item-content">
          <h3 className="feature-label">Materials</h3>
          <p className="feature-description">A standardized index of materials, set up automatic task triggers to take action.</p>
          <ul className="sub-feature-list">
            <li>
              <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <div className="sub-feature-item-content">
                <h5 className="sub-feature-label">Orders</h5>
                <p className="sub-feature-description">Request orders from anywhere on the fly. Set up automatic task triggers to take action.</p>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default FeatureList;

import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import { User, getAuth, signInWithEmailAndPassword,  } from "firebase/auth";

export const Firebase = () => {
    const app = initializeApp();
    const auth = getAuth(app);
    const signIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    return {app, auth, signIn};
}

export async function GET() {
    const user = Firebase().auth.currentUser;
    if (user == null) {
        return new Response('Unauthorized', {
          status: 401
        })
      }
  
      // Given incoming request /home
      let response = NextResponse.json(user);
  
      // Set a cookie to hide the banner
      // Response will have a `Set-Cookie:show-banner=false;path=/home` header
      return response;
}

export async function POST(req: Request) {
    const json: {email: string, password: string} = await req.json()
    const { email, password } = json
    const session = await Firebase().signIn(email, password);
  
    if (session == null) {
      return new Response('Unauthorized', {
        status: 401
      })
    }

    // Given incoming request /home
    let response = NextResponse.json(session);

    // Set a cookie to hide the banner
    // Response will have a `Set-Cookie:show-banner=false;path=/home` header
    return response;
  }

export const user = async (): Promise<User> => {
    const res = await fetch('localhost:3000/api/auth')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   return res.json();
  }
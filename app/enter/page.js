'use client'
import { auth, googleAuthProvider } from "@/lib/firebase";
// import { auth, googleAuthProvider } from "../../lib/firebase";

export default function Enter(props) {
    const user = null;
    const username = null;

    // 1. User signed out <SignInButton/>
    // 2. User signed in but missing username <UsernameForm/>
    // 3. User signed in, has username <SignOutButton/>
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </div>
    )
}

const testEnv = () => {
    console.log('Inside Test Env');
    console.log(process.env.FIREBASE_API_KEY);
}

// Sign-in with Google button
function SignInButton() {
    const signInWithGoogle = async () => {
        console.log(await process.env.FIREBASE_API_KEY);

        // await auth.signInWithPoppUp(googleAuthProvider);
        await console.log("Clicked");
    }

    return (
        <>
            <button className="btn-google" onClick={signInWithGoogle}>
                <img src={'/google.png'} alt="Google Sign In Image" /> Sign In with Google
            </button>
            <button className="btn-google" onClick={testEnv}>
                <img src={'/vercel.svg'} alt="" /> Test ENV
            </button>
        </>
    )
}

// Sign-out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
function UsernameForm() {

    return null;
}
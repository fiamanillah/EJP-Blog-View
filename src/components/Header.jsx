import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Header() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="flex justify-between items-center p-4 bg-slate-900">
            <h1 className="text-4xl font-extrabold">Header</h1>
            <div className="flex space-x-4 font-bold text-xl">
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                {user ? (
                    <>
                        <Link href="/profile">Profile</Link>
                        <LogoutLink>Log out</LogoutLink>
                    </>
                ) : (
                    <>
                        <LoginLink>Sign in</LoginLink>
                        <RegisterLink>Sign up</RegisterLink>
                    </>
                )}
            </div>
        </div>
    );
}

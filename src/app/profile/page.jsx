import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { redirect } from 'next/navigation';

export default async function Profile() {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect('/api/auth/login');
    }
    return (await isAuthenticated()) ? (
        <div>This page is protected - but you can view it because you are authenticated</div>
    ) : (
        <div>
            Please log in to view your <LoginLink>Login</LoginLink> to view it
        </div>
    );
}

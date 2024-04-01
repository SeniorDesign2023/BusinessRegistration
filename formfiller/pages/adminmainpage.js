import { useRouter } from 'next/router';
import AdminMainPage from '../app/AdminPages/AdminMainPage';

export default function adminMainPage() {
    const router = useRouter();
    //const { org } = router.query; //tag={org}
    return <AdminMainPage />;
}
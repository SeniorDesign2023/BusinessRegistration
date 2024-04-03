import { useRouter } from 'next/router';
import MainPage from '../app/BasicPages/MainPage';

export default function mainP() {
    const router = useRouter();
    const { org, role, tag } = router.query;
    return <MainPage orgName={org} orgRole={role} orgTag={tag}/>;
}
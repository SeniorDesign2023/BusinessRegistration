import { useRouter } from 'next/router';
import AdminManageForms from '../app/AdminPages/AdminManageForms';

export default function adminManageForm() {
    const router = useRouter();
    const { org } = router.query;
    return <AdminManageForms />;
}
import { useRouter } from 'next/router';
import CreateFormPage from '../app/FormPages/CreateFormPage';

export default function CreateForm() {
    const router = useRouter();
    const { org, role } = router.query;
    return <CreateFormPage orgName = {org} orgRole ={role}/>;
}
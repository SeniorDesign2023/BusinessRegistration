import { useRouter } from 'next/router';
import AssignForms from '../app/AdminPages/AssignForms';

export default function assignform() {
    const router = useRouter();
    const { org } = router.query;
    return <AssignForms orgName = {org}/>;
}
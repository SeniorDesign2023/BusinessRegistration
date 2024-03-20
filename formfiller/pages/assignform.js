import { useRouter } from 'next/router';
import AssignForms from '../app/AdminPages/AssignForms';

export default function assignform() {
    const router = useRouter();
    const {formName, org} = router.query;
    return <AssignForms formName = {formName} orgName = {org}/>;
}
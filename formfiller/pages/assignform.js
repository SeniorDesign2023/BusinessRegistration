import { useRouter } from 'next/router';
import AssignForms from '../app/AdminPages/AssignForms';

export default function assignform() {
    const router = useRouter();
    const {formName, org, formID} = router.query;
    //console.log("assignform " + formID);
    return <AssignForms formName = {formName} orgName = {org} id = {formID}/>;
}
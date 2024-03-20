import { useRouter } from 'next/router';
import FormResponses from '../app/AdminPages/FormResponses';

export default function formresponse() {
    const router = useRouter();
    const {formName, org} = router.query;
    return <FormResponses formName={formName} orgName = {org}/>;
}
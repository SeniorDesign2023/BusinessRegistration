import { useRouter } from 'next/router';
import FormResponses from '../app/AdminPages/FormResponses';

export default function formresponse() {
    const router = useRouter();
    const {formID, org, tag} = router.query;
    return <FormResponses formID={formID} orgName={org} orgTag={tag}/>;
}
import { useRouter } from 'next/router';
import FormResponses from '../app/AdminPages/FormResponses';

export default function formresponse() {
    const router = useRouter();
    const {formName} = router.query;
    return <FormResponses formName={formName}/>;
}
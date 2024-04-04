import { useRouter } from 'next/router';
import FormSchemaPage from '../app/FormPages/FormSchemaPage';

export default function CreateForm() {
    const router = useRouter();
    const { org, role, tag } = router.query;
    return <FormSchemaPage orgName={org} orgRole={role} orgTag={tag}/>;
}
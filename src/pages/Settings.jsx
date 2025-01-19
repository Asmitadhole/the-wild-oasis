import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1" className="text-4xl font-bold">
        Update hotel settings
      </Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;

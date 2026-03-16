import Layout from "@/components/layout/Layout";
import ComingSoon from "@/components/common/ComingSoon";
import AgendaPage from "@/components/Agenda/Conference_agenda";
import PreConferenceWorkshopComponent from "@/components/Agenda/Pre_conference_agenda";

export default function PreAgenda() {
  return (
    <Layout>
     {/* <ComingSoon/> */}
     <PreConferenceWorkshopComponent />
    </Layout>
  );
}
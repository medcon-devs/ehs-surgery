import Layout from "@/components/layout/Layout";
import AgendaPage from "@/components/Agenda/Conference_agenda";

export default function DayOneAgenda() {
  return (
    <Layout>
      <AgendaPage day={1} />
    </Layout>
  );
}

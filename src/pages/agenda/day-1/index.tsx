import Layout from "@/components/layout/Layout";
import AgendaPage from "@/components/Agenda/Conference_agenda";

export default function DayOneAgenda() {
  return (
    <Layout>
      <AgendaPage day={1} />
    </Layout>
  );
}



// import Layout from "@/components/layout/Layout";

// export default function DayOneAgenda() {
//   return (
//     <Layout>
//       <div
//         style={{
//           minHeight: "65vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           padding: "40px 20px",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "42px",
//             fontWeight: "700",
//             color: "#001965",
//             marginBottom: "15px",
//           }}
//         >
//           Coming Soon
//         </h1>

//         <p
//           style={{
//             fontSize: "18px",
//             color: "#666",
//             maxWidth: "500px",
//             lineHeight: "1.6",
//           }}
//         >
//           The conference agenda will be available soon.
//           Stay tuned for updates!
//         </p>
//       </div>
//     </Layout>
//   );
// }

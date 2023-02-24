import StudentListItem from "./StudentListItem";

export default function StudentList({ students }) {
  return (
    <ul>
      {students.map((student, idx) => (
        <StudentListItem student={student} key={idx} index={idx} />
      ))}
    </ul>
  );
}

const AdminPanel = ({isHost}) => {
  if (!isHost) return null;

  return (
    <p>you are the host - admin controls go here</p>
  )
};

export default AdminPanel;
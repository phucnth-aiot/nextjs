export default function BadComponent() {
  const msg = 'Hello world'; // lỗi thiếu semicolon
  const a = 1;
  return <div>{msg}</div>;
}

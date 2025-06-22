export default function BadComponent() {
  const msg = 'Hello world'; // lỗi thiếu semicolon
  const num: number = 'not a number'; // cố tình lỗi

  return <div>{msg}</div>;
}

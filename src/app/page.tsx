import Link from "next/link";

export default function Home() {
  return (
    <nav>
      <h1>Homepage</h1>
      <Link href="/services">Services</Link>
    </nav>
  );
}

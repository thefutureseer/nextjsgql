import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Go to the{" "}
      <Link href="/api/graphql">
        <a>GraphQL Server</a>
      </Link>
    </div>
  );
}
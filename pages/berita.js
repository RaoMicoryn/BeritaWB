import Link from "next/link";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Berita() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <div className="max-w-2xl w-full">
        <Title level={2} className="!mb-8 !text-gray-800">
          Berita Terbaru
        </Title>

        <Paragraph className="!text-gray-600 !text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae voluptas architecto modi ratione nostrud corrupti quis. Modi ratione dicta adipiscing dicta velit quae tempor iusto et modi explicabo aspernatur sequi. Iusto vitae dolorem ipsam aute ducimus dolor.
        </Paragraph>

        <Paragraph className="!text-gray-600 !text-base leading-relaxed">
          Nisi vero magni aute est ab mollit magnam tempor reprehenderit excepteur quas non quae adipiscing. Consequat odio amet reprehenderit eiusmod anim veniam eius. Sequi proident velit nisi accusamus quaerat sequi eiusmod. Neque mollitia corrupti mollitia ea animi sit exercitation adipisci quae. Veritatis cupiditate cupiditate vero mollit ad. Adipisci molestias enim tempor sit magna nulla culpa ipsam ea laborum magna minim non odit.
        </Paragraph>

        <div className="flex gap-4 mt-10">
          <Link
            href="/berita"
            className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Read More
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

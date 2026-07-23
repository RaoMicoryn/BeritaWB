import Link from "next/link";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <Title level={1} className="!mb-4 !text-gray-800">
          Selamat Datang
        </Title>
        <Paragraph className="!text-gray-600 !text-base">
          Ini adalah halaman utama. Cek halaman berita terbaru di bawah.
        </Paragraph>
        <Link
          href="/berita"
          className="inline-block mt-6 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Lihat Berita
        </Link>
      </div>
    </div>
  );
}

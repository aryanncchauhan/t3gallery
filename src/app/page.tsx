import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://3l9foyyg1h.ufs.sh/f/meOdMfknKMNyxXrxrDtUkb6TO97wsdKiRfcuZvHlMqjxnpPh",
  "https://3l9foyyg1h.ufs.sh/f/meOdMfknKMNyhyPI66FOvHm8f2Un9z6bKajDVBtFlCqLxTWi",
  "https://3l9foyyg1h.ufs.sh/f/meOdMfknKMNywRQ5TAoO2iFNDHfnbzUvCtuyrsRIB9cZ1qJj",
  "https://3l9foyyg1h.ufs.sh/f/meOdMfknKMNyB6ROoPmiCvDejpQyrunlcPtVk7YR530EmwK1",
  "https://3l9foyyg1h.ufs.sh/f/meOdMfknKMNyUBtMzp4szwXvo7Eq8htYnaRZQ0dxk9Up3TuF"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("Posts:", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" className="aspect-video object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}

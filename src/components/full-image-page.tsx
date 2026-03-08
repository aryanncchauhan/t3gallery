import { getImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex w-full h-full min-w-0">
      <div className="shrink flex justify-center items-center">
        <img src={image.url} className="shrink object-contain" />
      </div>

      <div className="flex w-48 flex-col shrink-0 border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
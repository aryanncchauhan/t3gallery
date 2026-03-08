import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/db/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  const clerk = await clerkClient();
  const uploaderInfo = await clerk.users.getUser(image.userId);

  return (
    <div className="flex w-full h-full min-w-0">
      <div className="shrink flex justify-center items-center">
        <img src={image.url} className="shrink object-contain" />
      </div>

      <div className="flex w-48 flex-col shrink-0 border-l">
        <div className="text-lg border-b text-center p-2">{image.name}</div>
        
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
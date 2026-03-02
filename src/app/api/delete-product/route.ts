import { revalidatePath } from "next/cache";

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
        });

        if (!res.ok) {
        return new Response("Failed to delete product", { status: 500 });
        }

        // Force ISR to revalidate
        revalidatePath("/my-product");

        return Response.json({ success: true });
    } catch {
        return new Response("Something went wrong", { status: 500 });
    }
}
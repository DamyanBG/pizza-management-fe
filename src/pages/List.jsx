/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T4jIB7sNbP1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function List() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-500">Pizza Management</h1>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
          Add New Pizza
        </Button>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-[100px_1fr_1fr_100px_100px] items-center gap-4 bg-blue-50 rounded-lg shadow-sm p-4 hover:bg-blue-100 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Pizza Image"
            width={100}
            height={100}
            className="rounded-md object-cover"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-500">Margherita Pizza</h3>
            <p className="text-blue-400">Tomato, Mozzarella, Basil</p>
          </div>
          <div className="text-blue-500 font-medium">$12.99</div>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Edit
          </Button>
          <Button size="sm" variant="danger" className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
        <div className="grid grid-cols-[100px_1fr_1fr_100px_100px] items-center gap-4 bg-blue-50 rounded-lg shadow-sm p-4 hover:bg-blue-100 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Pizza Image"
            width={100}
            height={100}
            className="rounded-md object-cover"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-500">Pepperoni Pizza</h3>
            <p className="text-blue-400">Tomato, Mozzarella, Pepperoni</p>
          </div>
          <div className="text-blue-500 font-medium">$14.99</div>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Edit
          </Button>
          <Button size="sm" variant="danger" className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
        <div className="grid grid-cols-[100px_1fr_1fr_100px_100px] items-center gap-4 bg-blue-50 rounded-lg shadow-sm p-4 hover:bg-blue-100 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Pizza Image"
            width={100}
            height={100}
            className="rounded-md object-cover"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-500">Veggie Pizza</h3>
            <p className="text-blue-400">Tomato, Mozzarella, Peppers, Onions, Mushrooms</p>
          </div>
          <div className="text-blue-500 font-medium">$13.99</div>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Edit
          </Button>
          <Button size="sm" variant="danger" className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
        <div className="grid grid-cols-[100px_1fr_1fr_100px_100px] items-center gap-4 bg-blue-50 rounded-lg shadow-sm p-4 hover:bg-blue-100 transition-colors">
          <img
            src="/placeholder.svg"
            alt="Pizza Image"
            width={100}
            height={100}
            className="rounded-md object-cover"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <div>
            <h3 className="text-lg font-semibold text-blue-500">Hawaiian Pizza</h3>
            <p className="text-blue-400">Tomato, Mozzarella, Ham, Pineapple</p>
          </div>
          <div className="text-blue-500 font-medium">$15.99</div>
          <Button
            size="sm"
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Edit
          </Button>
          <Button size="sm" variant="danger" className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
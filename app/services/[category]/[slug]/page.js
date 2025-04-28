import clientPromise from '@/lib/mongo';

export default async function Page({ params }) {
    const { category, slug } = params;
    const collection = category;

    const client = await clientPromise;
    const db = client.db();

    console.log(`Collection: ${collection}, Slug: ${slug}`);

    const selectedCollection = db.collection(collection);
    const page = await selectedCollection.findOne({ slug });

    if (!page) {
        return <div className="text-black">Page not found</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-white px-6 py-12">
  <div className="max-w-4xl w-full rounded-3xl shadow-2xl p-12 bg-white border-t-[6px] border-indigo-600 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(99,102,241,0.35)]">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-md hover:drop-shadow-xl transition-all duration-300">
        {page.title}
      </h1>
      <p className="text-lg text-gray-600 leading-8 tracking-wide">
        {page.content}
      </p>
    </div>
  </div>
</div>

    );
}

export async function generateMetadata({ params }) {
    const { category, slug } = params;
    const collection = category;
    const client = await clientPromise;
    const db = client.db();

    const selectedCollection = db.collection(collection);
    const page = await selectedCollection.findOne({ slug });

    if (!page) {
        return {
            title: 'Page Not Found',
            description: 'The requested page does not exist.',
        };
    }

    return {
        title: page.metaTitle,
        description: page.metaDescription,
    };
}

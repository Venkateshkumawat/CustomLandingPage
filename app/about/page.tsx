import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          About Ben Achana Photography
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt="Ben Achana"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              Ben Achana is a passionate photographer with over a decade of experience capturing life's most precious
              moments. Based in [City Name], Ben specializes in wedding, fashion, travel, and portrait photography.
            </p>
            <p>
              With a keen eye for detail and a talent for storytelling through images, Ben has built a reputation for
              creating timeless, emotive photographs that his clients treasure for years to come.
            </p>
            <p>
              Ben's work has been featured in numerous publications, and he has had the privilege of working with
              clients from all walks of life, from local families to international celebrities.
            </p>
            <p>
              When not behind the camera, Ben enjoys traveling, exploring new cultures, and spending time with his
              family. His personal experiences often inspire his professional work, bringing a unique perspective to
              each shoot.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


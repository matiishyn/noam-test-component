import AppBanner from '@/components/AppBanner/AppBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { appsData, getAppById } from '@/lib/data';
import { ExternalLink, Play, Smartphone, Volume2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return appsData.map((app) => ({
    id: app.id.toString(),
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function AppPage({ params }: PageProps) {
  const id = parseInt(params.id);

  // If ID is not a valid number or doesn't exist, redirect to app/1
  if (isNaN(id) || id < 1) {
    redirect('/app/1');
  }

  const app = getAppById(id);

  // If app not found, redirect to app/1
  if (!app) {
    redirect('/app/1');
  }

  const titleColor = app.color || '#000000';
  const isNews = app.title.toLowerCase().includes('news');
  const isRadio = app.title.toLowerCase().includes('fm') || app.title.toLowerCase().includes('jazz');

  return (
    <div>



      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {appsData.map(({ id: appId }) => (
                <Link key={appId} href={`/app/${appId}`}>
                  <Button
                    variant={appId === id ? "default" : "outline"}
                    size="sm"
                    className="font-medium"
                  >
                    App {appId}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}

      <AppBanner app={app} />

      <AppBanner app={app} />

      <hr /><hr /><hr />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - App Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <Image
                  src={app.logo}
                  alt={app.title}
                  width={160}
                  height={160}
                  className="rounded-full shadow-2xl border-4 border-white"
                  priority
                />
              </div>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
              style={{ color: titleColor }}
            >
              {app.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
              {isNews && "Stay informed with the latest breaking news, weather updates, and local stories that matter to your community."}
              {isRadio && !isNews && "Enjoy high-quality music streaming with crystal-clear sound and your favorite tracks available 24/7."}
              {!isNews && !isRadio && "Experience premium content and entertainment tailored just for you."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg font-medium">
                <Play className="h-5 w-5 mr-2" />
                {isNews ? "Listen Live" : "Start Playing"}
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 font-medium">
                <ExternalLink className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 scale-110"></div>
              <div className="relative">
                <Image
                  src="/Phone (2).png"
                  alt="Mobile App Interface"
                  width={300}
                  height={600}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {isNews ? <ExternalLink className="h-6 w-6 text-blue-600" /> : <Play className="h-6 w-6 text-blue-600" />}
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {isNews ? "Live Updates" : "Play Now"}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {isNews ? "Real-time news as it happens" : "Start listening immediately"}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {isNews ? "Audio Reports" : "High Quality"}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {isNews ? "Listen to news on the go" : "Crystal clear sound quality"}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-900">
                {isNews ? "Mobile Ready" : "Mobile App"}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {isNews ? "Get alerts on your mobile device" : "Available on iOS and Android"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-medium mb-4 text-gray-900">Download the Mobile App</h2>
          <p className="text-gray-600 mb-6 font-light">Experience {app.title} on your mobile device with our intuitive app interface.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 font-medium">
              <Smartphone className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50 font-medium">
              <Smartphone className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 font-light">
            <p>© 2024 {app.title}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
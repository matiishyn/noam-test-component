import AppBanner from '@/components/AppBanner/AppBanner';
import { Button } from '@/components/ui/button';
import { appsData, getAppById } from '@/lib/data';
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

    </div>
  );
}
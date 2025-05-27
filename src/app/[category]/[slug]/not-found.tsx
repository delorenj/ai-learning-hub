'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileX, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <FileX className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-gray-900">
            Content Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            The content you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="space-y-2">
            <Link href="/">
              <Button className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              Or browse our content categories below
            </p>
            <div className="flex gap-2 justify-center">
              <Link href="/howto">
                <Button variant="outline" size="sm">How-To</Button>
              </Link>
              <Link href="/tipsnips">
                <Button variant="outline" size="sm">Tip Snips</Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="sm">Resources</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
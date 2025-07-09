import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const paths = [
    process.cwd(),
    '/app/content',
    path.join(process.cwd(), 'content'),
    './content',
    '../content',
    '../../content',
  ];

  const results: any = {
    cwd: process.cwd(),
    __dirname: __dirname,
    nodeEnv: process.env.NODE_ENV,
    paths: {}
  };

  for (const p of paths) {
    try {
      const exists = fs.existsSync(p);
      let files: string[] = [];
      if (exists && fs.statSync(p).isDirectory()) {
        files = fs.readdirSync(p);
      }
      results.paths[p] = { exists, files };
    } catch (error: any) {
      results.paths[p] = { error: error.message };
    }
  }

  // Also check what's in the howto directory if we can find it
  const contentPaths = [
    '/app/content/howto',
    path.join(process.cwd(), 'content/howto'),
    './content/howto',
  ];

  results.howtoPaths = {};
  for (const p of contentPaths) {
    try {
      const exists = fs.existsSync(p);
      let files: string[] = [];
      if (exists) {
        files = fs.readdirSync(p);
      }
      results.howtoPaths[p] = { exists, files };
    } catch (error: any) {
      results.howtoPaths[p] = { error: error.message };
    }
  }

  return NextResponse.json(results, { status: 200 });
}
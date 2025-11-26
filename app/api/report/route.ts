import { NextResponse } from 'next/server';
import { format } from 'date-fns';

export async function GET() {
  try {
    // Get the current date for the filename
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    
    // Create CSV content
    const csvHeader = 'Reel Name,Audio Track,Status,Reason,Copyright Info\n';
    
    // In a real app, you would fetch this data from your database
    const csvContent = csvHeader + [
      'reel_001.mp4,Original Audio Track,Safe,No copyright issues,',
      'reel_002.mp4,Popular Song Track,Flagged,Copyrighted Content,Protected by Universal Music',
      'reel_003.mp4,Royalty Free Music,Safe,Royalty-free content,',
      'reel_004.mp4,Instagram Audio Library,Safe,Platform approved,'
    ].join('\n');

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a response with the Blob
    const response = new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="copyright-report-${currentDate}.csv"`,
      },
    });

    return response;
  } catch (error) {
    console.error('Error generating report:', error);
    return new NextResponse('Error generating report', { status: 500 });
  }
}

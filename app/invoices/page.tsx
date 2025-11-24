"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const invoices = [
  {
    id: "CW-2025-0001",
    date: new Date().toLocaleDateString(),
    total: "$9.99",
    method: "PayPal",
    status: "Paid",
  },
  {
    id: "CW-2025-0002",
    date: new Date().toLocaleDateString(),
    total: "$19.98",
    method: "Card",
    status: "Paid",
  },
  {
    id: "CW-2025-0003",
    date: new Date().toLocaleDateString(),
    total: "$9.99",
    method: "PayPal",
    status: "Refunded",
  },
];

export default function InvoicesPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof invoices)[number] | null>(null);

  const handleDownload = (inv: (typeof invoices)[number]) => {
    const html = `<!doctype html>
    <html>
      <head>
        <meta charset='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <title>Invoice ${inv.id}</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; color: #0f172a; margin: 0; padding: 24px; }
          .card { max-width: 720px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; }
          .row { display: flex; justify-content: space-between; align-items: center; }
          .muted { color: #6b7280; font-size: 12px; }
          .title { font-weight: 700; font-size: 16px; }
          .line { height: 1px; background: #e5e7eb; margin: 16px 0; }
          .item, .total { display: flex; justify-content: space-between; font-size: 14px; }
          .total { font-weight: 700; font-size: 16px; }
          .brand { font-weight: 700; font-size: 18px; margin-bottom: 8px; }
          @media print { body { padding: 0; } .card { border: 0; } }
        </style>
      </head>
      <body>
        <div class='card'>
          <div class='brand'>Copywright Music Detect</div>
          <div class='row'>
            <div>
              <div class='muted'>Invoice</div>
              <div class='title'>${inv.id}</div>
            </div>
            <div style='text-align:right'>
              <div class='muted'>Date</div>
              <div>${inv.date}</div>
            </div>
          </div>
          <div class='line'></div>
          <div class='item'>
            <div>Instagram Reels Copyright Scan</div>
            <div>${inv.total}</div>
          </div>
          <div class='item'>
            <div class='muted'>Payment Method</div>
            <div>${inv.method}</div>
          </div>
          <div class='item'>
            <div class='muted'>Status</div>
            <div>${inv.status}</div>
          </div>
          <div class='line'></div>
          <div class='total'>
            <div>Total Paid</div>
            <div>${inv.total}</div>
          </div>
        </div>
        <script>
          window.onload = function(){
            window.print();
            window.onafterprint = () => window.close();
          }
        </script>
      </body>
    </html>`;
    const win = window.open("", "_blank", "width=900,height=1000");
    if (!win) return;
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
  };

  return (
    <div className="container mx-auto px-5 lg:px-0 py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Invoice #</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-b last:border-b-0">
                  <td className="px-6 py-4 font-medium text-gray-900">{inv.id}</td>
                  <td className="px-6 py-4 text-gray-700">{inv.date}</td>
                  <td className="px-6 py-4 text-gray-900">{inv.total}</td>
                  <td className="px-6 py-4 text-gray-700">{inv.method}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                        inv.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : inv.status === "Refunded"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="border-gray-300"
                        onClick={() => {
                          setSelected(inv);
                          setOpen(true);
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300"
                        onClick={() => handleDownload(inv)}
                      >
                        Download
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invoice {selected?.id}</DialogTitle>
            <DialogDescription>
              Summary of your purchase and payment details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Date</span>
              <span className="text-gray-900">{selected?.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Method</span>
              <span className="text-gray-900">{selected?.method}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Status</span>
              <span className="text-gray-900">{selected?.status}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <span className="text-base font-bold text-gray-900">{selected?.total}</span>
            </div>
          </div>
          <div className="pt-4">
            <Button className="w-full bg-red-600 text-white" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

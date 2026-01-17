import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-10" />
        <Link href="/" className="text-xl font-bold">Koperasi Desa Koto Jayo Bersamo</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-accent">Beranda</Link></li>
          <li><Link href="/tentang" className="hover:text-accent">Tentang Kami</Link></li>
          <li><Link href="/kegiatan" className="hover:text-accent">Dokumentasi Kegiatan</Link></li>
          <li><Link href="/laporan-keuangan" className="hover:text-accent">Laporan Keuangan</Link></li>
          <li><Link href="/kontak" className="hover:text-accent">Kontak</Link></li>
          <li><Link href="/admin/login" className="text-sm hover:text-accent">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}
 <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">


    <title></title>
</head>
<body>

    <div class="wrapper">
        <aside id="sidebar" class="expand">
            <div class="sidebar-header text-center p-3">
                <img src="https://via.placeholder.com/50" alt="user-photo" class="rounded-circle mb-2">
                <p class="text-white mb-0">Welcome, KAMALUDDIN</p>
                <small class="text-white-50">Administrator</small>
            </div>
            <ul class="sidebar-nav">

                <li class="sidebar-title"></li>
                <li class="sidebar-item dashboard">
                    <a href="index.html" class="sidebar-link">
                        <i class='bx bx-home-alt'></i>  
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="sidebar-title">MENU KARYAWAN</li>
                <li class="sidebar-item">
                    <a href="karyawan.html" class="sidebar-link">
                        <i class='bx bx-group'></i>
                        <span>Karyawan</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="jabatan.html" class="sidebar-link">
                        <i class='bx bx-id-card'></i>
                        <span>Jabatan</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="divisi.html" class="sidebar-link">
                        <i class='bx bx-briefcase-alt'></i>
                        <span>Divisi</span>
                    </a>
                </li>
                
                <li class="sidebar-title">MENU ABSENSI</li>
                <li class="sidebar-item">
                    <a href="absensi.html" class="sidebar-link">
                        <i class='bx bx-calendar'></i>
                        <span>Absensi</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="izin.html" class="sidebar-link">
                        <i class='bx bx-time'></i>
                        <span>Izin</span>
                    </a>
                </li>
                <li class="sidebar-item active">
                    <a href="lembur.html" class="sidebar-link">
                        <i class='bx bx-alarm'></i>
                        <span>Lembur</span>
                    </a>
                </li>

                <li class="sidebar-title">MENU PENGGAJIAN</li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class='bx bx-money'></i>
                        <span>Slip Gaji</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class='bx bx-printer'></i>
                        <span>Cetak Slip Gaji</span>
                    </a>
                </li>

                <li class="sidebar-title">MENU LAPORAN</li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class='bx bx-file'></i>
                        <span>Cetak Laporan</span>
                    </a>
                </li>

                <li class="sidebar-title">MENU ADMIN</li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class='bx bx-user'></i>
                        <span>Pengguna</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer text-center p-3">
                <a href="#" class="btn btn-primary w-100">
                    <i class='bx bx-log-out'></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>


        <div class="main">
                        <div class="container">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2>Daftar Lembur Karyawan</h2>
                    <button onclick="window.location.href='#'" class="btn btn-primary">Ubah Status </button>
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Cari..." aria-label="Search">
                </div>
                
                <div class="table-responsive">
                    <table class="table table-striped align-middle mid">
                        <thead class="table-primary">
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                
                                <th>Tanggal</th>
                                <th>Jam Lembur<br> Mulai|Akhir</th>
                                <th>Keperluan Lembur</th>
                                <th> Status</th>    

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Yovan Fiqri</td>
                                
                                <td>2023-05-10</td>
                                <td>10:35:00|10:40:00</td>
                                <td>Lembur</td>
                                <td>Menunggu konfirmasi</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Yovan Fiqri</td>
                               
                                <td>2023-05-09</td>
                                <td>11:05:00|20:10:00</td>
                                <td>123</td>
                                <td>Disetujui</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Yovan Fiqri</td>
                               
                                <td>2023-05-09</td>
                                <td>11:05:00|20:10:00</td>
                                <td>nugas</td>
                                <td>Disetujui</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Yovan Fiqri</td>
                               
                                <td>2023-05-09</td>
                                <td>11:05:00|20:10:00</td>
                                <td>deadline</td>
                                <td>Disetujui</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Yovan Fiqri</td>
                               
                                <td>2023-05-09</td>
                                <td>11:05:00|20:10:00</td>
                                <td>--</td>
                                <td>Disetujui</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Yovan Fiqri</td>
                               
                                <td>2023-05-09</td>
                                <td>11:05:00|20:10:00</td>
                                <td>lembur</td>
                                <td>Disetujui</td>
                            </tr>
                            <!-- Tambahkan data karyawan lainnya sesuai kebutuhan -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="script.js"></script>



</body>
</html>
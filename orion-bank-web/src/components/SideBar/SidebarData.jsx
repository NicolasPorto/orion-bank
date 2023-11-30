import NavHome from "../../assets/img/navHome.svg";
import NavExtrato from "../../assets/img/navExtrato.svg";
import NavTransf from "../../assets/img/navTransf.svg";
import NavPix from "../../assets/img/navPix.svg";
import NavUser from "../../assets/img/navUser.svg";
import NavAdmin from "../../assets/img/navAdmin.svg";
import Arrow from "../../assets/img/arrow-sidebar.svg";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: NavHome,
    iconClosed: NavHome,
    iconOpened: NavHome
  },
  {
    title: 'Admin',
    icon: NavAdmin,
    arrow: Arrow,
    iconClosed: NavAdmin,
    iconOpened: NavAdmin,
    subNav: [
      {
        title: 'Solicitações de Conta',
        cName: 'sub-nav',
        path: '/solicitacoesConta'
      }
    ]
  },
  {
    title: 'Extrato',
    icon: NavExtrato,
    arrow: Arrow,
    iconClosed: NavExtrato,
    iconOpened: NavExtrato,
    subNav: [
      {
        title: 'Consultar',
        path: '/extratoConta',
        cName: 'sub-nav',
      }
    ]
  },
  {
    title: 'Transferencias',
    icon: NavTransf,
    arrow: Arrow,
    iconClosed: NavTransf,
    iconOpened: NavTransf,
    subNav: [
      {
        title: 'Transferir',
        path: 'transferir',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Area Pix',
    icon: NavPix,
    arrow: Arrow,
    iconClosed: NavPix,
    iconOpened: NavPix,
    subNav: [
      {
        title: 'Cadastrar Chave',
        path: 'cadastrarChave',
        cName: 'sub-nav'
      },
      {
        title: 'Criar QR Code',
        path: 'criarQRCode',
        cName: 'sub-nav'
      },
      {
        title: 'Pix',
        path: 'pix',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Conta',
    icon: NavUser,
    arrow: Arrow,
    iconClosed: NavUser,
    iconOpened: NavUser,
    subNav: [
      {
        title: 'Dados',
        path: 'dados',
        cName: 'sub-nav'
      }
    ]
  },
];
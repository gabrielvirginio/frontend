"use client"

import * as React from "react"
import {
  IconDatabase,
  IconFolder,
  IconListDetails,
  IconSettings,
  IconHelp,
  IconSearch,
} from "@tabler/icons-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Pizza } from "lucide-react"
import Link from "next/link"

const data = {
  user: {
    name: "Gabriel Virginio",
    email: "gabriel@example.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      name: "Produtos",
      link: "/painel/produtos" as const,
      icon: IconDatabase,
    },
    {
      name: "Categorias",
      link: "/painel/categorias" as const,
      icon: IconFolder,
    },
    {
      name: "Pedidos",
      link: "/painel/pedidos" as const,
      icon: IconListDetails,
    },
  ],
  navSecondary: [
    {
      name: "Configurações",
      link: "/painel/configuracoes" as const,
      icon: IconSettings,
    },
    {
      name: "Ajuda",
      link: "/painel/ajuda" as const,
      icon: IconHelp,
    },
    {
      name: "Pesquisar",
      link: "/painel/pesquisa" as const,
      icon: IconSearch,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/painel">
                <Pizza className="!size-5" />
                <span className="text-base font-semibold">Delivery</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Conteúdo principal */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.link}>
                      <item.icon className="!size-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secundário */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.link}>
                      <item.icon className="!size-5" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Rodapé futuro (usuário, etc.) */}
      <SidebarFooter>
        {/* Você pode adicionar <NavUser user={data.user} /> aqui se desejar */}
      </SidebarFooter>
    </Sidebar>
  )
}

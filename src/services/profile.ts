import type { Menu } from "../models/Menu";
import type { Profile } from "../models/Profile";
import { userAuthentication } from "./auth";

const API_URL = "/api/profile";

export async function getUserProfiles(): Promise<Profile[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/findAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar perfis.");
    }

    const profiles: Profile[] = await res.json();
    return profiles;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProfileById(profileId: number): Promise<Profile> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/${profileId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message ?? "Erro ao buscar perfil.");
    }

    const profile: Profile = await res.json();
    return profile;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMenusByProfileId(
  profileId: number
): Promise<Menu[]> {
  const token = userAuthentication.getTokenFromStorage();

  try {
    const res = await fetch(`${API_URL}/menus/${profileId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ?? "Erro ao buscar menus do perfil."
      );
    }

    const menus: Menu[] = await res.json();
    return menus;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
import fs from "fs";
import path from "path";

export type AvatarItem = {
  id: string; // مثلاً face-women-face1
  label: string;
  src: string; // آدرس عکس در public
  gender: "men" | "women" | "kids" | "none";
  type: "face" | "dress" | "pose" | "background";
};

// فولدرهایی مثل face / dress / pose که زیرش men / women / kids دارن
function scanSubFolders(baseFolder: string, type: AvatarItem["type"]) {
  const results: AvatarItem[] = [];
  const basePath = path.join(process.cwd(), "public/assets/avatar", baseFolder);

  if (!fs.existsSync(basePath)) return [];

  const genders = fs
    .readdirSync(basePath)
    .filter((f) => fs.statSync(path.join(basePath, f)).isDirectory());

  for (const g of genders) {
    const genderPath = path.join(basePath, g);
    const files = fs
      .readdirSync(genderPath)
      .filter((file) => file.match(/\.(png|jpg|jpeg|webp)$/i));

    for (const file of files) {
      const cleanName = file.replace(/\..+$/, "");
      results.push({
        id: `${type}-${g}-${cleanName}`,
        label: cleanName,
        src: `/assets/avatar/${baseFolder}/${g}/${file}`,
        gender: g as "men" | "women" | "kids",
        type,
      });
    }
  }

  return results;
}

// بکگراند که زیرشاخه جنسیت نداره
function scanSimpleFolder(baseFolder: string, type: AvatarItem["type"]) {
  const results: AvatarItem[] = [];
  const basePath = path.join(process.cwd(), "public/assets/avatar", baseFolder);

  if (!fs.existsSync(basePath)) return [];

  const files = fs
    .readdirSync(basePath)
    .filter((file) => file.match(/\.(png|jpg|jpeg|webp)$/i));

  for (const file of files) {
    const cleanName = file.replace(/\..+$/, "");
    results.push({
      id: `${type}-none-${cleanName}`,
      label: cleanName,
      src: `/assets/avatar/${baseFolder}/${file}`,
      gender: "none",
      type,
    });
  }

  return results;
}

export function loadAvatarBank(): AvatarItem[] {
  return [
    ...scanSubFolders("face", "face"),
    ...scanSubFolders("dress", "dress"),
    ...scanSubFolders("pose", "pose"),
    ...scanSimpleFolder("background", "background"),
  ];
}

import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { listCharacters } from "~/data";

export const loader = async () => {
  const characters = await listCharacters();
  return { characters };
};

export default function App() {
  const { characters } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-scroll md:overflow-y-clip">
      <nav className="bg-slate-100 md:w-80 flex-0">
        <ul tabIndex={0} className="menu">
          <li>
            <NavLink
              to={`/knacks`}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Knacks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/skills`}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Skills
            </NavLink>
          </li>
          <li className="menu-title">Characters</li>
          {characters.map(({ pk, name }) => (
            <li key={pk}>
              <NavLink
                to={`/characters/${pk}`}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

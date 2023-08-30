import { CaretLeftOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { HeaderContainer, HeaderIcons } from "./styles"
import { useState } from "react";

interface Props {
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
}

const Header = ({ showBackButton, onBackButtonClick }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <HeaderContainer>
      <HeaderIcons>
        {showBackButton && <CaretLeftOutlined className="header-button" onClick={onBackButtonClick} />}
      </HeaderIcons>

      <h1 className="logo">BUOY</h1>

      <HeaderIcons>
        <MenuUnfoldOutlined className="header-button" onClick={() => setCollapsed(!collapsed)} />
      </HeaderIcons>
    </HeaderContainer>
  )
}

export { Header }
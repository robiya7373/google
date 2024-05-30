import React from "react";
import Telegram from "../../public/telegram.jpg";
import Instagram from "../../public/instagram.jpg";
import Linkedin from "../../public/linkedin.jpg";
import Pinterest from "../../public/pinterest.jpg";
import Tiktok from "../../public/tiktok.jpg";
import Facebook from "../../public/facebook.jpg";
import Maps from "../../public/twitter.jpg";
import Youtube from "../../public/youtube.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

const SeorchNav = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" animate-pulse w-[350px] grid grid-cols-4 gap-6 ms-[620px]">
      <div>
        <a href="https://web.telegram.org/k/">
          <img src={Telegram} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Telegram</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.instagram.org/k/">
          <img src={Instagram} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Instagram</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.linkedin.org/k/">
          <img src={Linkedin} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Linkedin</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.pinterest.org/k/">
          <img src={Pinterest} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Pinterest</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.tiktok.org/k/">
          <img src={Tiktok} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Tiktok</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.facebook.org/k/">
          <img src={Facebook} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Facebook</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.twitter.org/k/">
          <img src={Maps} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Maps</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <a href="https://web.youtube.org/k/">
          <img src={Youtube} className=" rounded-[50px]" />
        </a>
        <Button onClick={handleOpen}>Youtube</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Edit shortcut
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Remove
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default SeorchNav;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

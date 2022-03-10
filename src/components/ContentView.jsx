import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ReactMarkdown from "react-markdown";
import "./ContentView.css";

import { Done, Close, Edit } from "@mui/icons-material";

function ContentView({contentViewCtrl, toggleContentView}) {
  return (
    <div>
      <Drawer
        anchor="right"
        open={contentViewCtrl.state}
        onClose={() => toggleContentView(false)}
      >
        <Box sx={{ width: "50vw" }} role="presentation">
          <div
            className="contentView"
            style={{ margin: "20px 20px 20px", padding: "0px 20px 0px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                margin: "0px 0px 30px",
              }}
            >
              <Button
                size="small"
                sx={{ height: "24px", fontSize: "12px" }}
                variant="contained"
                color="success"
                startIcon={<Done sx={{ padding: "0px 0px 3px" }} />}
              >
                Mark as Done
              </Button>
              <Button
                size="small"
                sx={{
                  height: "24px",
                  fontSize: "12px",
                  color: "black",
                  backgroundColor: "gold",
                }}
                variant="contained"
                startIcon={<Edit sx={{ padding: "0px 0px 3px" }} />}
              >
                Edit
              </Button>
            </div>
              <h1
                contentEditable="true"
                onBlur={(e) => contentViewCtrl.onChangeTitle(e.currentTarget.textContent)}
              >
                {contentViewCtrl.title}
              </h1>
            <div style={{ padding: "0 4px 0" }}>
              <ReactMarkdown>{contentViewCtrl.body}</ReactMarkdown>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

ContentView.propTypes = {};

export default ContentView;

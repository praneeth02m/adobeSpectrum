import "@spectrum-web-components/tabs/sp-tabs.js";
import "@spectrum-web-components/tabs/sp-tab.js";
import "@spectrum-web-components/tabs/sp-tab-panel.js";
import "@spectrum-web-components/card/sp-card.js";
import { useParams } from "react-router-dom";
import { Flex, View, Button, TextField, Text } from "@adobe/react-spectrum";
import { FiUpload } from "react-icons/fi";
import { IoMdSwitch } from "react-icons/io";
import { Picker } from "@adobe/react-spectrum";
import {
  AlertDialog,
  DialogTrigger,
  ActionButton,
} from "@adobe/react-spectrum";

import {
  Breadcrumbs,
  Item,
  TabList,
  TabPanels,
  Tabs,
} from "@adobe/react-spectrum";

import "./index.css";

const airportsList = [
  {
    id: 1,
    airport: "Indra Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminal: 1,
  },
  {
    id: 2,
    airport: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminal: 5,
  },
  {
    id: 3,
    airport: "Heathrow Airport",
    country: "England",
    code: "LHR",
    terminal: 6,
  },
  {
    id: 4,
    airport: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    terminal: 3,
  },
  {
    id: 5,
    airport: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminal: 14,
  },
];

const Airport = (props) => {
  const { id } = useParams();
  const airport = airportsList.find((each) => each.id === parseInt(id));
  const airportName = airport.airport;
  return (
    <div className="in-content">
      <div className="root">
        <Breadcrumbs showRoot>
          <Item href="/airports">Airport</Item>
          <Item>{airportName}</Item>
        </Breadcrumbs>
      </div>
      <div>
        <h1>{airportName}</h1>
        <div className="tabs-style">
          <Tabs aria-label="History of Ancient Rome">
            <TabList>
              <Item key="FoR">Terminals</Item>
              <Item key="MaR">Transport</Item>
              <Item key="Emp">Contact details</Item>
            </TabList>
            <TabPanels>
              <Item key="FoR">
                <Flex direction="row" gap="size-700" className="card-box">
                  <View>
                    <sp-card
                      className="card-style"
                      variant="standard"
                      horizontal="true"
                      focused="true"
                      heading="Terminal 1"
                      subheading="Optional metadata should be two lines."
                    >
                      <img
                        className="terminal-design"
                        slot="cover-photo"
                        src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                        alt="DemoImage"
                      />

                      <sp-action-menu
                        label="More Actions"
                        slot="actions"
                        placement="bottom-end"
                        quiet
                      >
                        <sp-menu-item>more</sp-menu-item>
                      </sp-action-menu>
                    </sp-card>
                  </View>
                  <View>
                    <sp-card
                      className="card-style"
                      variant="standard"
                      horizontal="true"
                      focused="true"
                      heading="Terminal 1"
                      subheading="Optional metadata should be two lines."
                    >
                      <img
                        className="terminal-design"
                        slot="cover-photo"
                        src="https://s3-alpha-sig.figma.com/img/e6fa/4d5a/9fa67efdaff0836c6b48500e00b4f1f6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdmYr5MqACzkzoqBJySPUXr-BgPcR0Tv3kWP7smBJk--CfbuhTMUeL~FMaGC4SN5ZEuVpAtG9X3pq7V-lFONPEgYXtiQgjpDLVicqokdVgKAG17B6PBljOTgqwDlqjkT91uZcWjHC9vS2~9OCxnUzyLBFTAMwIWADc3yRpeqvV4g4u7k1STFHxq~Nk-vsBw2sXcsVHlMpoa6DT4rTAlmpAlBEQvkmCJkxtQLTPRQ-SXMckrjKDHOo8b~Kgj4tGQ87tTwRTYzx7iSX~K8LxAT9I6ADjFT~SLM-aa0qQXZLomWgc3JLzJmeJ1JIMhF~b2kyqbQfDjrjAyzRqrkIZomYw__"
                        alt="DemoImage"
                      />

                      <sp-action-menu
                        label="More Actions"
                        slot="actions"
                        placement="bottom-end"
                        quiet
                      >
                        <sp-menu-item>more</sp-menu-item>
                      </sp-action-menu>
                    </sp-card>
                  </View>
                  <View>
                    <Button variant="primary">+Add Terminal</Button>
                  </View>
                </Flex>
                <h1 className="options-style">Services</h1>
                <p>Lost & found</p>
                <hr />
                <Flex marginBottom="50px" justifyContent="space-between">
                  <Flex gap="size-150" alignItems="center" wrap>
                    <TextField
                      label="Service Name"
                      placeholder="Lost & found"
                    />
                    <Picker label="Category" selectedKey="Option 1">
                      <Item key="Option 1">Option 1</Item>
                      <Item key="Option 2">Option 2</Item>
                      <Item key="Option 3">Option 3</Item>
                    </Picker>
                    <Picker label="Sub Category" selectedKey="Option 1">
                      <Item key="Option 1">Option 1</Item>
                      <Item key="Option 2">Option 2</Item>
                      <Item key="Option 3">Option 3</Item>
                    </Picker>
                    <DialogTrigger>
                      <ActionButton>
                        <Button variant="primary">
                          <FiUpload />
                          upload image
                        </Button>
                      </ActionButton>
                      <AlertDialog
                        variant="information"
                        title="Terminal title"
                        primaryActionLabel="Continue"
                        cancelLabel="Cancel"
                        secondaryActionLabel={
                          <Button variant="primary">
                            <FiUpload />
                            upload image
                          </Button>
                        }
                      >
                        Description
                      </AlertDialog>
                    </DialogTrigger>
                    <Button>
                      <IoMdSwitch />
                      <Text>Show image</Text>
                    </Button>
                    <TextField
                      label="Description"
                      placeholder="type here"
                      type="text"
                    />
                  </Flex>
                  <Flex>
                    <Button variant="primary" style="fill">
                      Save
                    </Button>
                  </Flex>
                </Flex>
                <h1 className="options-style">Lounge</h1>
                <hr />
                <h1 className="options-style">Money Exchange</h1>
                <hr />
              </Item>
              <Item key="MaR">Transport.</Item>
              <Item key="Emp">Contact details.</Item>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Airport;

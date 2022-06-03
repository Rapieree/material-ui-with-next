import {NextApiRequest, NextApiResponse} from "next";
import {User} from "../../src/models/models";
import {addDocumentToDB} from "../../src/service/mongodb";
import {IUser} from "../../src/utils/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = new User<IUser>({
    login: `haha`,
    password: `ho`,
  });

  await addDocumentToDB(user);

  await res.send(`ok`);
};

export default handler;
